export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skuSDsgyJMaIfv2iAoEWNgVdrhr9AsDGa5dmSYPcS2WL1d2qfptti5SDal59UQtCGDMbNngUiZQQ8bnrF1AYqX2nFTHEvkzMSFMBTQunVuQ0hwM6DxzqzOS3PXA326ZfIGA9nqYprpFPkJMmvKOZ1NykLluVtXBRz1KVT0kw2HtVbd1shnR4",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
