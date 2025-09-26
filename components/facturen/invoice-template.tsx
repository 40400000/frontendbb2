import Image from "next/image"
import { Heart } from 'lucide-react'

interface OrderItem {
  id: string;
  product: string;
  description: string;
  quantity: number;
  price: number;
}

interface BusinessInfo {
  bedrijfsnaam: string;
  adres: string;
  postcode: string;
  stad: string;
  land: string;
  kvkNummer: string;
  btwNummer: string;
}

interface BillingInfo {
  naam: string;
  adres: string;
  postcode: string;
  stad: string;
  land: string;
  btwNummer: string;
  kvkNummer: string;
}

interface InvoiceTemplateProps {
  isKorEnabled?: boolean;
  customRule?: string;
  invoiceNumber?: string;
  invoicePrefix?: string;
  logoUrl?: string;
  businessInfo?: BusinessInfo;
  billingInfo?: BillingInfo;
  orderItems?: OrderItem[];
  orderDate?: string;
  orderId?: string;
}

const dutchMonths: { [key: number]: string } = {
    0: 'JAN', 1: 'FEB', 2: 'MRT', 3: 'APR', 4: 'MEI', 5: 'JUN',
    6: 'JUL', 7: 'AUG', 8: 'SEP', 9: 'OKT', 10: 'NOV', 11: 'DEC'
};

export default function InvoiceTemplate({ isKorEnabled = false, customRule, invoiceNumber, invoicePrefix, logoUrl, businessInfo, billingInfo, orderItems, orderDate, orderId }: InvoiceTemplateProps) {
  const btwPercentage = isKorEnabled ? 0 : 21;

  // Calculate totals
  const subtotal = orderItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0) || 0;
  const btwAmount = isKorEnabled ? 0 : subtotal * 0.21;
  const total = subtotal + btwAmount;

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[210mm] aspect-[210/297] overflow-hidden shadow-xl bg-white text-black dark:text-black">
        <div className="p-8 h-full overflow-y-auto flex flex-col">
          {/* Header */}
          <div className="flex justify-between mb-12">
            <div className="w-32 h-32 font-sans flex items-start justify-start">
              {logoUrl && <Image src={logoUrl} alt="Logo" width={128} height={128} className="object-contain" />}
            </div>
            <div className={logoUrl ? "text-right" : "text-left"}>
              <h1 className="text-xl font-semibold mb-2 text-black dark:text-black">{businessInfo?.bedrijfsnaam || 'Bedrijfsnaam'}</h1>
              <p className="text-black dark:text-black">{businessInfo?.adres}</p>
              <p className="text-black dark:text-black">{`${businessInfo?.postcode}, ${businessInfo?.stad}`}</p>
              <p className="text-black dark:text-black">{businessInfo?.land}</p>
              <p className="text-black dark:text-black">KVK: {businessInfo?.kvkNummer}</p>
              <p className="text-black dark:text-black">BTW: {businessInfo?.btwNummer}</p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="flex justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-black">Factuur</h2>
              <div className="space-y-1">
                <div className="mb-4">
                  <p className="text-black dark:text-black">{billingInfo?.naam || 'Klant naam'}</p>
                  {billingInfo?.btwNummer && <p className="text-black dark:text-black">BTW: {billingInfo.btwNummer}</p>}
                  {billingInfo?.kvkNummer && <p className="text-black dark:text-black">KVK: {billingInfo.kvkNummer}</p>}
                </div>
                <p className="text-black dark:text-black">{billingInfo?.adres}</p>
                <p className="text-black dark:text-black">{`${billingInfo?.postcode}, ${billingInfo?.stad}`}</p>
                <p className="text-black dark:text-black">{billingInfo?.land}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between gap-8">
                <span className="text-black dark:text-black">Factuurdatum:</span>
                <span className="text-black dark:text-black">{orderDate || '3-12-2024'}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-black dark:text-black">Factuurnummer:</span>
                <span className="text-black dark:text-black">
                    {invoicePrefix
                        ?.replace('{jaar}', new Date().getFullYear().toString())
                        .replace('{maand}', dutchMonths[new Date().getMonth()])}
                    {invoiceNumber || '0000001'}
                </span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-black dark:text-black">Bestelnummer:</span>
                <span className="text-black dark:text-black">{orderId || '1234567890'}</span>
              </div>
            </div>
          </div>

          {/* Custom Rule Display */}
          {customRule && (
            <div className="mb-4 text-sm text-black dark:text-black">
              {customRule}
            </div>
          )}

          {/* Product Table */}
          <table className="w-full mb-8 table-fixed">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 text-gray-600 dark:text-black w-1/2">PRODUCT</th>
                <th className="py-2 text-gray-600 dark:text-black w-1/6">AANTAL</th>
                <th className="py-2 text-gray-600 dark:text-black w-1/6">PRIJS</th>
                <th className="py-2 text-gray-600 dark:text-black w-1/6">BTW</th>
                <th className="py-2 text-gray-600 dark:text-black text-right w-1/6">SUBTOTAAL</th>
              </tr>
            </thead>
            <tbody>
              {orderItems?.map((item) => {
                const itemTotal = item.price * item.quantity;
                return (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">
                      <div className="text-sm text-black dark:text-black">{item.product}</div>
                      {item.description && (
                        <div className="text-sm text-gray-600 dark:text-gray-700">{item.description}</div>
                      )}
                    </td>
                    <td className="py-4 text-black dark:text-black">{item.quantity}</td>
                    <td className="py-4 text-black dark:text-black">€ {item.price.toFixed(2).replace('.', ',')}</td>
                    <td className="py-4 text-black dark:text-black">BTW {btwPercentage}%</td>
                    <td className="py-4 text-right text-black dark:text-black">€ {itemTotal.toFixed(2).replace('.', ',')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Totals */}
          <div className="w-full max-w-xs ml-auto space-y-2">
            <div className="flex justify-between">
              <span className="text-black dark:text-black">Subtotaal excl. BTW</span>
              <span className="text-black dark:text-black">€ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black dark:text-black">
                {isKorEnabled 
                  ? "Vrijgesteld van OB o.g.v. artikel 25 Wet OB"
                  : "BTW"
                }
              </span>
              {!isKorEnabled && <span className="text-black dark:text-black">€ {btwAmount.toFixed(2).replace('.', ',')}</span>}
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span className="text-black dark:text-black">Totaal incl. BTW</span>
              <span className="text-black dark:text-black">€ {total.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-auto pt-16">
            <div className="flex items-center gap-2">
              <Heart className="text-red-500 fill-red-500" />
              <span className="text-black dark:text-black">Bedankt!</span>
            </div>
            <p className="text-gray-600 dark:text-gray-700">Betaling verloopt via bol.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

