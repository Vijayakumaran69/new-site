import type { NextConfig } from "next";

const getBasePath = () => {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined && process.env.NEXT_PUBLIC_BASE_PATH !== "") {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
    return repoName ? `/${repoName}` : "";
  }
  if (process.env.NODE_ENV === "production") {
    return "/new-site";
  }
  return "";
};

const basePath = getBasePath();
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
