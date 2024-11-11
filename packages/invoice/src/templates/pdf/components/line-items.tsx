import { formatAmount } from "@midday/utils/format";
import { Text, View } from "@react-pdf/renderer";
import type { LineItem } from "../../types";

type Props = {
  lineItems: LineItem[];
  currency: string;
  descriptionLabel: string;
  quantityLabel: string;
  priceLabel: string;
  totalLabel: string;
  vatLabel?: string;
  includeVAT?: boolean;
  locale: string;
  includeDecimals?: boolean;
};

export function LineItems({
  lineItems,
  currency,
  descriptionLabel,
  quantityLabel,
  priceLabel,
  totalLabel,
  locale,
  includeVAT = false,
  vatLabel,
  includeDecimals,
}: Props) {
  const maximumFractionDigits = includeDecimals ? 2 : 0;

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 0.5,
          borderBottomColor: "#000",
          paddingBottom: 5,
          marginBottom: 5,
        }}
      >
        <Text style={{ flex: 3, fontSize: 9, fontWeight: 500 }}>
          {descriptionLabel}
        </Text>
        <Text style={{ flex: 1, fontSize: 9, fontWeight: 500 }}>
          {quantityLabel}
        </Text>
        <Text style={{ flex: 1, fontSize: 9, fontWeight: 500 }}>
          {priceLabel}
        </Text>
        {includeVAT && (
          <Text style={{ flex: 1, fontSize: 9, fontWeight: 500 }}>
            {vatLabel}
          </Text>
        )}
        <Text
          style={{
            flex: 1,
            fontSize: 9,
            fontWeight: 500,
            textAlign: "right",
          }}
        >
          {totalLabel}
        </Text>
      </View>
      {lineItems.map((item, index) => (
        <View
          key={`line-item-${index.toString()}`}
          style={{ flexDirection: "row", paddingVertical: 5 }}
        >
          <Text style={{ flex: 3, fontSize: 9 }}>{item.name}</Text>

          <Text style={{ flex: 1, fontSize: 9 }}>{item.quantity}</Text>

          <Text style={{ flex: 1, fontSize: 9 }}>
            {formatAmount({
              currency,
              amount: item.price,
              locale,
              maximumFractionDigits,
            })}
          </Text>

          {includeVAT && (
            <Text style={{ flex: 1, fontSize: 9 }}>{item.vat}%</Text>
          )}

          <Text style={{ flex: 1, fontSize: 9, textAlign: "right" }}>
            {formatAmount({
              currency,
              amount: item.quantity * item.price,
              locale,
              maximumFractionDigits,
            })}
          </Text>
        </View>
      ))}
    </View>
  );
}
