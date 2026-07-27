const WARM_PIXEL_SKIN = {
  id: "warm-pixel",
  basePath: "./assets/skins/warm-pixel/",
  manifestPath: "./assets/skins/warm-pixel/manifest.json",
};

let warmPixelManifest = null;

async function loadWarmPixelSkinManifest() {
  try {
    const response = await fetch(WARM_PIXEL_SKIN.manifestPath, { cache: "no-cache" });
    if (!response.ok) throw new Error(`Skin manifest load failed: ${response.status}`);
    warmPixelManifest = await response.json();
    document.documentElement.dataset.skin = WARM_PIXEL_SKIN.id;
    return warmPixelManifest;
  } catch (error) {
    console.warn("Warm pixel skin unavailable; using CSS fallback.", error);
    warmPixelManifest = null;
    return null;
  }
}

function getWarmPixelAsset(assetKey, use2x = false) {
  const record = warmPixelManifest?.assets?.[assetKey];
  if (!record) return "";
  return `${WARM_PIXEL_SKIN.basePath}${use2x && record.path2x ? record.path2x : record.path}`;
}
