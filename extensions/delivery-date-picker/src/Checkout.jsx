import {
  Banner,
  BlockStack,
  Checkbox,
  DatePicker,
  reactExtension,
  useApi,
  useApplyAttributeChange,
  useApplyMetafieldsChange,
  useInstructions,
  useMetafield,
  useTranslate
} from "@shopify/ui-extensions-react/checkout";
import { useState } from "react";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.shipping-option-list.render-after", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const instructions = useInstructions();
  const applyAttributeChange = useApplyAttributeChange();

  const deliveryDate = useMetafield({
    namespace: "details",
    key: "date"
  });

  const handleDateChange = (date) => {
    setDeliveryDate(date);
  }
  const setDeliveryDate = useApplyMetafieldsChange();


  // 2. Check instructions for feature availability, see https://shopify.dev/docs/api/checkout-ui-extensions/apis/cart-instructions for details
  if (!instructions.attributes.canUpdateAttributes) {
    // For checkouts such as draft order invoices, cart attributes may not be allowed
    // Consider rendering a fallback UI or nothing at all, if the feature is unavailable
    return (
      <Banner title="delivery-date-picker" status="warning">
        {translate("attributeChangesAreNotSupported")}
      </Banner>
    );
  }

  // 3. Render a UI
  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      <Banner title="delivery-date-picker">
        <DatePicker 
          selected={deliveryDate?.value}
          onChange={ (value) =>{
            setDeliveryDate({
              type: "updateMetafield",
              namespace: "details",
              key: "date",
              valueType: "string",
              value,
            });
          }}
        />
      </Banner>
      <Checkbox onChange={onCheckboxChange}>
        {translate("iWouldLikeAFreeGiftWithMyOrder")}
      </Checkbox>
    </BlockStack>
  );

  async function onCheckboxChange(isChecked) {
    // 4. Call the API to modify checkout
    const result = await applyAttributeChange({
      key: "requestedFreeGift",
      type: "updateAttribute",
      value: isChecked ? "yes" : "no",
    });
    console.log("applyAttributeChange result", result);
  }
}