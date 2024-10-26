import { useEffect, useState } from "react";
import {
  Button,
  reactExtension,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order.action.menu-item.render", () => (
    <MenuActionExtension />

//   async (api) => {
//     console.log("test 1");
//     const { orderId } = api;
//     let hasFulfillments = false;
//     try {
//       const orderQuery = {
//         query: `query {
//           order(id: "${orderId}") {
//             fulfillments(first: 1) {
//               nodes {
//                 latestShipmentStatus
//               }
//             }
//           }
//         }`,
//       };
//       const result = await fetch(
//         "shopify://customer-account/api/unstable/graphql.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderQuery),
//         }
//       );
//       const { data } = await result.json();
//       hasFulfillments = data.order.fulfillments.nodes.length !== 0;
//       console.log(`${hasFulfillments}`, data);
//     } catch (error) {
//       console.log(error);
//       hasFulfillments = false;
//     }
//     return <MenuActionExtension showAction={hasFulfillments} />;
//   }
));

// function MenuActionExtension({ showAction }: { showAction: boolean }) {
//   if (!showAction) {
//     return null;
//   }

//   return <Button>Report a problem</Button>;
// }

function MenuActionExtension() {
    return "Hello world";
  }
  
