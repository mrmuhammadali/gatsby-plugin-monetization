const GUID = "d9ac5ea3-8b41-4660-98a9-ca4df1176ebf"

export const startMonetization = () => {
  const paymentPointer = document
    .querySelector('meta[name="monetization"]')
    ?.getAttribute("content")
  const detail = { requestId: GUID, paymentPointer }
  const startEvent = new CustomEvent("monetizationstart", { detail })
  const progressEvent = new CustomEvent("monetizationprogress", {
    detail: { ...detail, amount: "0.1", assetCode: "USD", assetScale: 2 },
  })

  document.monetization.state = "started"
  document.monetization.dispatchEvent(startEvent)
  document.monetization.dispatchEvent(progressEvent)
}

export const stopMonetization = () => {
  const paymentPointer = document
    .querySelector('meta[name="monetization"]')
    ?.getAttribute("content")
  const detail = { requestId: GUID, paymentPointer, finalized: false }
  document.monetization.state = "stopped"
  document.monetization.dispatchEvent(
    new CustomEvent("monetizationstop", { detail })
  )
}
