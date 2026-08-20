// One-off generator for lib/worldMapPath.ts -- NOT part of the app build or
// runtime bundle. Run it only if the map ever needs regenerating (e.g. a
// different resolution or projection):
//
//   npm install --no-save d3-geo topojson-client world-atlas
//   node scripts/generate-world-map-path.mjs > /tmp/world-path.txt
//
// Then paste the single-line path string from /tmp/world-path.txt into the
// `worldMapPath` export in lib/worldMapPath.ts. d3-geo/topojson-client/
// world-atlas are intentionally NOT project dependencies -- installing them
// with --no-save keeps them out of package.json/package-lock.json.
import { geoPath, geoEquirectangular } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/land-110m.json" with { type: "json" };

const width = 1000;
const height = 500;

const projection = geoEquirectangular().fitSize([width, height], { type: "Sphere" });
const path = geoPath(projection);

const land = feature(worldData, worldData.objects.land);

const d = path(land);
console.log(d);
