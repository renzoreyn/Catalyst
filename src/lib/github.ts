import { SITE } from "@/lib/site";

/** Used when GitHub is unreachable or there are no releases yet. */
const FALLBACK_VERSION = "1.0.0";

const RELEASES_API = "https://api.github.com/repos/renzoreyn/catalyst/releases/latest";

export type LatestRelease = {
  version: string;
  tag: string;
  url: string;
};

/**
 * Latest plugin version from GitHub Releases (tag v1.0.0 → "1.0.0").
 * Cached via Next.js revalidate — no manual bump on the marketing site.
 */
export async function getLatestRelease(): Promise<LatestRelease> {
  const fallback: LatestRelease = {
    version: FALLBACK_VERSION,
    tag: `v${FALLBACK_VERSION}`,
    url: SITE.releases,
  };

  try {
    const res = await fetch(RELEASES_API, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "catalyst-website",
      },
    });

    if (!res.ok) {
      return fallback;
    }

    const data = (await res.json()) as { tag_name?: string; html_url?: string };
    const tag = data.tag_name?.trim() ?? "";
    const version = tag.replace(/^v/i, "");

    if (!version) {
      return fallback;
    }

    return {
      version,
      tag: tag.startsWith("v") ? tag : `v${version}`,
      url: data.html_url || SITE.releases,
    };
  } catch {
    return fallback;
  }
}
