export class VariantSelector extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.addEventListener("change", this.variantChanged)
  }

  disconnectedCallback() {
    this.removeEventListener("change", this.variantChanged)
  }

  private get selectedOptions() {
    return Array.from(this.querySelectorAll("select"), (select) => select.value)
  }

  private get variantJson() {
    return JSON.parse(this.querySelector('script[type="application/json"]').textContent)
  }

  private get currentVariant() {
    return this.variantJson.find((variant) => {
      return !variant.options
        .map((option, index) => {
          return this.selectedOptions[index] === option
        })
        .includes(false)
    })
  }

  private variantChanged(e) {
    this.updateUrl()
    this.updateFormId()
    this.updatePrice()
  }

  private updateUrl() {
    window.history.replaceState({}, "", `${this.dataset.url}?variant=${this.currentVariant.id}`)
  }

  private updateFormId() {
    document.querySelector<HTMLInputElement>('#product-form input[name="id"]').value = this.currentVariant.id
  }

  private updatePrice() {
    fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`)
      .then((response) => response.text())
      .then((responseText) => {
        const id = `price-${this.dataset.section}`
        const html = new DOMParser().parseFromString(responseText, "text/html")
        const oldPrice = document.getElementById(id)
        const newPrice = html.getElementById(id)
        if (oldPrice && newPrice) {
          oldPrice.innerHTML = newPrice.innerHTML
        }
      })
  }
}

customElements.define("variant-selector", VariantSelector)
