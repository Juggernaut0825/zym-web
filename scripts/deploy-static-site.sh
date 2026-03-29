#!/usr/bin/env bash
set -euo pipefail

AWS_REGION="${AWS_REGION:-us-east-1}"
BUCKET_NAME="${BUCKET_NAME:-zym-web-site}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E37ZASBAK6IVIE}"
OUT_DIR="${OUT_DIR:-out}"
BUILD_FIRST="${BUILD_FIRST:-true}"

if [[ "${BUILD_FIRST}" == "true" ]]; then
  npm run build
fi

if [[ ! -d "${OUT_DIR}" ]]; then
  echo "Static output directory '${OUT_DIR}' does not exist." >&2
  exit 1
fi

aws s3 sync "${OUT_DIR}/" "s3://${BUCKET_NAME}/" \
  --region "${AWS_REGION}" \
  --delete \
  --exclude "admin.html" \
  --exclude "admin.css" \
  --exclude "admin.js"

aws cloudfront create-invalidation \
  --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
  --paths "/*" \
  --region "${AWS_REGION}" >/dev/null

echo "Static site deployed to https://zym8.com"
