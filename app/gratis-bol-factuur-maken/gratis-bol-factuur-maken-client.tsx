'use client'

import { useState } from 'react'
import InvoiceTemplate from '@/components/facturen/invoice-template'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Plus, Trash2, ChevronDown, ChevronUp, Upload, X, Eye, X as CloseIcon, Download } from 'lucide-react'
import { KiteIcon } from '@/components/ui/kite-icon'
import { uploadLogo } from '@/app/actions/upload-logo'
import { InvoiceDialog } from '@/components/invoice-dialog'

interface BusinessInfo {
  bedrijfsnaam: string
  adres: string
  postcode: string
  stad: string
  land: string
  kvkNummer: string
  btwNummer: string
}

interface BillingInfo {
  naam: string
  adres: string
  postcode: string
  stad: string
  land: string
  btwNummer: string
  kvkNummer: string
}

interface OrderItem {
  id: string
  product: string
  description: string
  quantity: number
  price: number
}

export function GratisBolFactuurMakenClient() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    bedrijfsnaam: '',
    adres: '',
    postcode: '',
    stad: '',
    land: '',
    kvkNummer: '',
    btwNummer: ''
  })

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    naam: '',
    adres: '',
    postcode: '',
    stad: '',
    land: '',
    btwNummer: '',
    kvkNummer: ''
  })

  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      id: '1',
      product: '',
      description: '',
      quantity: 1,
      price: 0
    }
  ])

  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoicePrefix, setInvoicePrefix] = useState('')
  const [customRule, setCustomRule] = useState('')
  const [isKorEnabled, setIsKorEnabled] = useState(false)
  const [orderDate, setOrderDate] = useState('')
  const [orderId, setOrderId] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [isUploadingLogo, setIsUploadingLogo] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [warningMessage, setWarningMessage] = useState('')
  const [warningType, setWarningType] = useState<'error' | 'warning'>('error')
  const [isDownloading, setIsDownloading] = useState(false)
  
  // Collapsible sections state
  const [isBusinessInfoOpen, setIsBusinessInfoOpen] = useState(true)
  const [isBillingInfoOpen, setIsBillingInfoOpen] = useState(true)
  const [isInvoiceSettingsOpen, setIsInvoiceSettingsOpen] = useState(true)
  const [isOrderItemsOpen, setIsOrderItemsOpen] = useState(true)

  const updateBusinessInfo = (field: keyof BusinessInfo, value: string) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }))
  }

  const updateBillingInfo = (field: keyof BillingInfo, value: string) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }))
  }

  const updateOrderItem = (id: string, field: keyof OrderItem, value: string | number) => {
    setOrderItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    )
  }

  const addOrderItem = () => {
    const newItem: OrderItem = {
      id: Date.now().toString(),
      product: '',
      description: '',
      quantity: 1,
      price: 0
    }
    setOrderItems(prev => [...prev, newItem])
  }

  const removeOrderItem = (id: string) => {
    setOrderItems(prev => prev.filter(item => item.id !== id))
  }

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    await uploadFile(file)
  }

  const removeLogo = () => {
    setLogoUrl('')
    setWarningMessage('')
  }

  const showWarning = (message: string, type: 'error' | 'warning' = 'error') => {
    setWarningMessage(message)
    setWarningType(type)
    // Auto-hide warning after 5 seconds
    setTimeout(() => {
      setWarningMessage('')
    }, 5000)
  }

  const generateInvoiceData = () => {
    const sampleData = getSampleData()
    
    return {
      apiKey: process.env.NEXT_PUBLIC_INVOICE_API_KEY || '',
      invoiceData: {
        isKorEnabled,
        btw_verleggen: false,
        customRule,
        invoiceNumber: sampleData.invoiceNumber,
        logoUrl: logoUrl || undefined,
        businessInfo: {
          bedrijfsnaam: sampleData.businessInfo.bedrijfsnaam,
          adres: sampleData.businessInfo.adres,
          postcode: sampleData.businessInfo.postcode,
          stad: sampleData.businessInfo.stad,
          land: sampleData.businessInfo.land,
          kvkNummer: sampleData.businessInfo.kvkNummer,
          btwNummer: sampleData.businessInfo.btwNummer,
        },
        billingInfo: {
          name: sampleData.billingInfo.naam,
          address: sampleData.billingInfo.adres,
          houseNumber: '', // Extract from address if needed
          zipCode: sampleData.billingInfo.postcode,
          city: sampleData.billingInfo.stad,
          country: sampleData.billingInfo.land,
          company: sampleData.billingInfo.naam,
          vatNumber: sampleData.billingInfo.btwNummer,
          kvkNumber: sampleData.billingInfo.kvkNummer,
          orderReference: sampleData.orderId,
        },
        orderItems: sampleData.orderItems.map(item => ({
          product_ean: '', // You might want to add EAN field to the form
          quantity: item.quantity,
          quantity_cancelled: 0,
          unit_price: item.price,
          product_name: item.product,
          btw_rate: isKorEnabled ? 0 : 21,
        })),
        orderDate: sampleData.orderDate,
        orderId: sampleData.orderId,
        productBtwRates: {}, // You might want to add this functionality
      }
    }
  }

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      const invoiceData = generateInvoiceData()
      console.log('📋 Generated invoice data:', {
        hasApiKey: !!invoiceData.apiKey,
        apiKeyLength: invoiceData.apiKey?.length || 0,
        businessInfo: invoiceData.invoiceData.businessInfo,
        billingInfo: invoiceData.invoiceData.billingInfo,
        orderItemsCount: invoiceData.invoiceData.orderItems.length,
        logoUrl: invoiceData.invoiceData.logoUrl
      })

      const apiUrl = 'https://app.bolbaas.nl/api/generate-invoice'
      console.log('🌐 Making request to:', apiUrl)
      
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      }
      
      console.log('📤 Request options:', {
        method: requestOptions.method,
        headers: requestOptions.headers,
        bodySize: JSON.stringify(invoiceData).length
      })

      const response = await fetch(apiUrl, requestOptions)
      
      console.log('📥 Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        })
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const result = await response.json()
      console.log('✅ API Response:', result)
      
      if (result.success && result.url) {
        console.log('🎉 Invoice generated successfully, URL:', result.url)
        
        // Download the file using fetch to ensure it's downloaded, not opened
        const response = await fetch(result.url)
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        
        // Construct full factuurnummer like in the preview
        const sampleData = getSampleData()
        const currentDate = new Date()
        const dutchMonths: { [key: number]: string } = {
          0: 'JAN', 1: 'FEB', 2: 'MRT', 3: 'APR', 4: 'MEI', 5: 'JUN',
          6: 'JUL', 7: 'AUG', 8: 'SEP', 9: 'OKT', 10: 'NOV', 11: 'DEC'
        }
        const fullFactuurnummer = (sampleData.invoicePrefix || 'FACT-{jaar}-{maand}-')
          .replace('{jaar}', currentDate.getFullYear().toString())
          .replace('{maand}', dutchMonths[currentDate.getMonth()]) + 
          (sampleData.invoiceNumber || '0000001')
        
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = `${fullFactuurnummer}.pdf`
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Clean up the blob URL
        window.URL.revokeObjectURL(downloadUrl)
        console.log('📥 Download initiated')
      } else {
        console.error('❌ API returned unsuccessful response:', result)
        showWarning(`Failed to generate invoice: ${result.message || 'Unknown error'}`)
      }
    } catch (error) {
      const errorObj = error as Error
      console.error('💥 Download error details:', {
        name: errorObj.name,
        message: errorObj.message,
        stack: errorObj.stack,
        cause: (errorObj as any).cause
      })
      
      // More specific error messages
      if (errorObj.name === 'TypeError' && errorObj.message.includes('Failed to fetch')) {
        console.error('🌐 Network error - possible causes:')
        console.error('- CORS issues')
        console.error('- Network connectivity')
        console.error('- API server down')
        console.error('- SSL/TLS certificate issues')
        showWarning('Network error: Unable to connect to the invoice generation service. Please check your internet connection and try again.')
      } else if (errorObj.message.includes('API Error')) {
        showWarning(`API Error: ${errorObj.message}`)
      } else {
        console.error('❌ Unexpected error:', error)
        showWarning(`Failed to download invoice: ${errorObj.message}`)
      }
    } finally {
      console.log('🏁 Download process finished')
      setIsDownloading(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        await uploadFile(file)
      } else {
        showWarning('Please upload an image file (JPEG, PNG, GIF, WebP, or SVG)')
      }
    }
  }

  const uploadFile = async (file: File) => {
    setIsUploadingLogo(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      const result = await uploadLogo(formData)
      
      if (result.success && result.url) {
        setLogoUrl(result.url)
        setWarningMessage('') // Clear any previous warnings on success
      } else {
        showWarning(result.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
      showWarning('Failed to upload logo. Please try again.')
    } finally {
      setIsUploadingLogo(false)
    }
  }

  // Sample data for preview
  const getSampleData = () => ({
    businessInfo: {
      bedrijfsnaam: businessInfo.bedrijfsnaam || 'BolBaas BV',
      adres: businessInfo.adres || 'Voorbeeldstraat 123',
      postcode: businessInfo.postcode || '1234AB',
      stad: businessInfo.stad || 'Amsterdam',
      land: businessInfo.land || 'Nederland',
      kvkNummer: businessInfo.kvkNummer || '12345678',
      btwNummer: businessInfo.btwNummer || 'NL123456789B01'
    },
    billingInfo: {
      naam: billingInfo.naam || 'Voorbeeld BV',
      adres: billingInfo.adres || 'W.A. van Oranje-Nassau',
      postcode: billingInfo.postcode || '1234AB',
      stad: billingInfo.stad || 'Apeldoorn',
      land: billingInfo.land || 'Nederland',
      btwNummer: billingInfo.btwNummer || 'NL123456789B01',
      kvkNummer: billingInfo.kvkNummer || '12345678'
    },
    orderItems: orderItems.length > 0 && orderItems[0].product ? orderItems : [{
      id: '1',
      product: 'Wimpel Oranje 175cm - Voor vlag aan huis - Koningsdag',
      description: '1 vlag',
      quantity: 2,
      price: 22.69
    }],
    invoiceNumber: invoiceNumber || '0000001',
    invoicePrefix: invoicePrefix || 'FACT-{jaar}-{maand}-',
    orderDate: orderDate || '3-12-2024',
    orderId: orderId || '1234567890'
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full min-h-screen pt-16 md:pt-28 pb-20 md:pb-32 bg-[#F6F5F3] text-[#111111] px-4 md:px-6">
        <div className="w-full relative z-10">
          {/* Hero Content */}
          <div className="container max-w-7xl mx-auto mb-12 md:mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <KiteIcon variant="blue" size={11} />
                <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                  GRATIS TOOL
                </span>
              </div>
              <h1 className="text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
                Gratis Bol <em className="italic">factuur</em> maken
              </h1>
              <p className="text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-70 max-w-2xl mx-auto">
                Maak BTW facturen voor je Bol bestellingen. Vul de gegevens in en zie direct een live preview van je factuur.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Form Section */}
              <div className="lg:w-1/2 space-y-6">
                {/* Logo Upload */}
                <Card className="bg-white border border-gray-200 py-2">
                  <CardHeader className="py-2 px-4 pb-0">
                    <div className="flex items-center gap-2">
                      <KiteIcon variant="blue" size={10} />
                      <CardTitle className="text-[18px] leading-[22px] font-medium text-[#111111]">Logo uploaden</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 px-4 pb-4">
                    {!logoUrl ? (
                      <div 
                        className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                          isDragOver 
                            ? 'border-blue-400 bg-blue-50' 
                            : 'border-[#ECECEC] hover:border-[#CFCFCF]'
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <Upload className={`h-8 w-8 mx-auto mb-3 ${isDragOver ? 'text-blue-500' : 'text-gray-400'}`} />
                        <Label htmlFor="logo-upload" className="cursor-pointer">
                          <span className="text-[#111111] font-medium">
                            {isDragOver ? 'Laat los om te uploaden' : 'Sleep logo hier of klik om te uploaden'}
                          </span>
                          <p className="text-sm text-gray-500 mt-1">JPEG, PNG, GIF, WebP of SVG (max 5MB)</p>
                        </Label>
                        <Input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          disabled={isUploadingLogo}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 border border-[#ECECEC] rounded-xl">
                        <div className="flex items-center gap-3">
                          <img 
                            src={logoUrl} 
                            alt="Uploaded logo" 
                            className="h-12 w-12 object-contain rounded"
                          />
                          <div>
                            <p className="text-sm font-medium text-[#111111]">Logo geüpload</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">

                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={removeLogo}
                            className="rounded-xl"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <Input
                            id="logo-replace"
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            disabled={isUploadingLogo}
                            className="hidden"
                          />
                        </div>
                      </div>
                    )}
                    {isUploadingLogo && (
                      <div className="text-center py-2">
                        <p className="text-sm text-gray-500">Logo wordt geüpload...</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Warning Message */}
                {warningMessage && (
                  <div className={`p-4 rounded-xl border ${
                    warningType === 'error' 
                      ? 'bg-red-50 border-red-200 text-red-800' 
                      : 'bg-yellow-50 border-yellow-200 text-yellow-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        warningType === 'error' ? 'bg-red-500' : 'bg-yellow-500'
                      }`} />
                      <span className="text-sm font-medium">{warningMessage}</span>
                      <button
                        onClick={() => setWarningMessage('')}
                        className="ml-auto text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Business Information */}
                <Card className="bg-white border border-gray-200 py-2">
                  <CardHeader className="py-2 px-4">
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg p-1 -m-1 -mx-1"
                      onClick={() => setIsBusinessInfoOpen(!isBusinessInfoOpen)}
                    >
                      <div className="flex items-center gap-2">
                        <KiteIcon variant="blue" size={10} />
                        <CardTitle className="text-[18px] leading-[22px] font-medium text-[#111111]">Bedrijfsinformatie</CardTitle>
                      </div>
                      {isBusinessInfoOpen ? (
                        <ChevronUp className="h-5 w-5 text-[#111111]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#111111]" />
                      )}
                    </div>
                  </CardHeader>
              {isBusinessInfoOpen && (
                <CardContent className="space-y-3 px-4 pb-4">
                <div>
                  <Label htmlFor="bedrijfsnaam" className="text-[#111111] mb-2 block">Bedrijfsnaam</Label>
                  <Input
                    id="bedrijfsnaam"
                    value={businessInfo.bedrijfsnaam}
                    onChange={(e) => updateBusinessInfo('bedrijfsnaam', e.target.value)}
                    placeholder="BolBaas BV"
                    className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="adres" className="text-[#111111] mb-2 block">Adres</Label>
                  <Input
                    id="adres"
                    value={businessInfo.adres}
                    onChange={(e) => updateBusinessInfo('adres', e.target.value)}
                    placeholder="Voorbeeldstraat 123"
                    className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postcode" className="text-[#111111] mb-2 block">Postcode</Label>
                    <Input
                      id="postcode"
                      value={businessInfo.postcode}
                      onChange={(e) => updateBusinessInfo('postcode', e.target.value)}
                      placeholder="1234AB"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stad" className="text-[#111111] mb-2 block">Stad</Label>
                    <Input
                      id="stad"
                      value={businessInfo.stad}
                      onChange={(e) => updateBusinessInfo('stad', e.target.value)}
                      placeholder="Amsterdam"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="land" className="text-[#111111] mb-2 block">Land</Label>
                  <Input
                    id="land"
                    value={businessInfo.land}
                    onChange={(e) => updateBusinessInfo('land', e.target.value)}
                    placeholder="Nederland"
                    className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="kvk" className="text-[#111111] mb-2 block">KVK Nummer</Label>
                    <Input
                      id="kvk"
                      value={businessInfo.kvkNummer}
                      onChange={(e) => updateBusinessInfo('kvkNummer', e.target.value)}
                      placeholder="12345678"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="btw" className="text-[#111111] mb-2 block">BTW Nummer</Label>
                    <Input
                      id="btw"
                      value={businessInfo.btwNummer}
                      onChange={(e) => updateBusinessInfo('btwNummer', e.target.value)}
                      placeholder="NL123456789B01"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                </div>
              </CardContent>
              )}
            </Card>

                {/* Billing Information */}
                <Card className="bg-white border border-gray-200 py-2">
                  <CardHeader className="py-2 px-4">
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg p-1 -m-1 -mx-1"
                      onClick={() => setIsBillingInfoOpen(!isBillingInfoOpen)}
                    >
                      <div className="flex items-center gap-2">
                        <KiteIcon variant="orange" size={10} />
                        <CardTitle className="text-[18px] leading-[22px] font-medium text-[#111111]">Factuurgegevens</CardTitle>
                      </div>
                      {isBillingInfoOpen ? (
                        <ChevronUp className="h-5 w-5 text-[#111111]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#111111]" />
                      )}
                    </div>
                  </CardHeader>
              {isBillingInfoOpen && (
              <CardContent className="space-y-3 px-4 pb-4">
                <div>
                  <Label htmlFor="billing-naam" className="text-[#111111] mb-2 block">Naam klant</Label>
                  <Input
                    id="billing-naam"
                    value={billingInfo.naam}
                    onChange={(e) => updateBillingInfo('naam', e.target.value)}
                    placeholder="Voorbeeld BV"
                    className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="billing-adres" className="text-[#111111] mb-2 block">Adres klant</Label>
                  <Input
                    id="billing-adres"
                    value={billingInfo.adres}
                    onChange={(e) => updateBillingInfo('adres', e.target.value)}
                    placeholder="W.A. van Oranje-Nassau"
                    className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="billing-postcode" className="text-[#111111] mb-2 block">Postcode</Label>
                    <Input
                      id="billing-postcode"
                      value={billingInfo.postcode}
                      onChange={(e) => updateBillingInfo('postcode', e.target.value)}
                      placeholder="1234AB"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="billing-stad" className="text-[#111111] mb-2 block">Stad</Label>
                    <Input
                      id="billing-stad"
                      value={billingInfo.stad}
                      onChange={(e) => updateBillingInfo('stad', e.target.value)}
                      placeholder="Apeldoorn"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="billing-land" className="text-[#111111] mb-2 block">Land</Label>
                  <Input
                    id="billing-land"
                    value={billingInfo.land}
                    onChange={(e) => updateBillingInfo('land', e.target.value)}
                    placeholder="Nederland"
                    className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                  />
                </div>
              </CardContent>
              )}
            </Card>

                {/* Invoice Settings */}
                <Card className="bg-white border border-gray-200 py-2">
                  <CardHeader className="py-2 px-4">
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg p-1 -m-1 -mx-1"
                      onClick={() => setIsInvoiceSettingsOpen(!isInvoiceSettingsOpen)}
                    >
                      <div className="flex items-center gap-2">
                        <KiteIcon variant="purple" size={10} />
                        <CardTitle className="text-[18px] leading-[22px] font-medium text-[#111111]">Factuurinstellingen</CardTitle>
                      </div>
                      {isInvoiceSettingsOpen ? (
                        <ChevronUp className="h-5 w-5 text-[#111111]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#111111]" />
                      )}
                    </div>
                  </CardHeader>
              {isInvoiceSettingsOpen && (
              <CardContent className="space-y-3 px-4 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="invoice-number" className="text-[#111111] mb-2 block">Factuurnummer</Label>
                    <Input
                      id="invoice-number"
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      placeholder="0000001"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="invoice-prefix" className="text-[#111111] mb-2 block">Voorvoegsel</Label>
                    <Input
                      id="invoice-prefix"
                      value={invoicePrefix}
                      onChange={(e) => setInvoicePrefix(e.target.value)}
                      placeholder="FACT-{jaar}-{maand}-"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="order-date" className="text-[#111111] mb-2 block">Factuurdatum</Label>
                    <Input
                      id="order-date"
                      value={orderDate}
                      onChange={(e) => setOrderDate(e.target.value)}
                      placeholder="3-12-2024"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="order-id" className="text-[#111111] mb-2 block">Bestelnummer</Label>
                    <Input
                      id="order-id"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder="1234567890"
                      className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="kor-enabled"
                    checked={isKorEnabled}
                    onCheckedChange={setIsKorEnabled}
                  />
                  <Label htmlFor="kor-enabled" className="text-[#111111]">KOR (Kleine ondernemersregeling)</Label>
                </div>
                <div>
                  <Label htmlFor="custom-rule" className="text-[#111111] mb-2 block">Aangepaste regel</Label>
                  <Textarea
                    id="custom-rule"
                    value={customRule}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCustomRule(e.target.value)}
                    placeholder="Optionele aangepaste regel voor de factuur"
                    className="text-[#111111] bg-white border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                    style={{ color: '#111111' }}
                  />
                </div>
              </CardContent>
              )}
            </Card>

                {/* Order Items */}
                <Card className="bg-white border border-gray-200 py-2">
                  <CardHeader className="py-2 px-4">
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg p-1 -m-1 -mx-1"
                      onClick={() => setIsOrderItemsOpen(!isOrderItemsOpen)}
                    >
                      <div className="flex items-center gap-2">
                        <KiteIcon variant="blue" size={10} />
                        <CardTitle className="text-[18px] leading-[22px] font-medium text-[#111111]">Producten</CardTitle>
                      </div>
                      {isOrderItemsOpen ? (
                        <ChevronUp className="h-5 w-5 text-[#111111]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#111111]" />
                      )}
                    </div>
                  </CardHeader>
              {isOrderItemsOpen && (
              <CardContent className="space-y-3 px-4 pb-4">
                {orderItems.map((item, index) => (
                  <div key={item.id} className="border border-[#ECECEC] rounded-xl p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-[#111111]">Product {index + 1}</h4>
                      {orderItems.length > 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeOrderItem(item.id)}
                          className="rounded-xl hover:cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div>
                      <Label className="text-[#111111] mb-2 block">Productnaam</Label>
                      <Input
                        value={item.product}
                        onChange={(e) => updateOrderItem(item.id, 'product', e.target.value)}
                        placeholder="Wimpel Oranje 175cm - Voor vlag aan huis - Koningsdag"
                        className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                      />
                    </div>
                    <div>
                      <Label className="text-[#111111] mb-2 block">Beschrijving</Label>
                      <Input
                        value={item.description}
                        onChange={(e) => updateOrderItem(item.id, 'description', e.target.value)}
                        placeholder="1 vlag"
                        className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-[#111111] mb-2 block">Aantal</Label>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateOrderItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                          placeholder="2"
                          className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                        />
                      </div>
                      <div>
                        <Label className="text-[#111111] mb-2 block">Prijs (€)</Label>
                        <Input
                          type="number"
                          step="0.01"
                          value={item.price}
                          onChange={(e) => updateOrderItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                          placeholder="22.69"
                          className="text-[#111111] border-[#ECECEC] focus:border-[#CFCFCF] rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button 
                  onClick={addOrderItem} 
                  className="w-full rounded-xl hover:cursor-pointer"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Product toevoegen
                </Button>
              </CardContent>
              )}
            </Card>
          </div>

              {/* Preview Section */}
              <div className="lg:w-1/2 lg:sticky lg:top-20 lg:self-start lg:max-h-[90vh] lg:overflow-y-auto">
                <Card className="bg-white border border-gray-200 py-2 gap-0">
                  <CardHeader className="py-2 px-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <KiteIcon variant="orange" size={10} />
                        <CardTitle className="text-[18px] leading-[22px] font-medium text-[#111111]">Live Preview</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => setIsDialogOpen(true)}
                          disabled={isDownloading}
                          variant="outline"
                          size="sm"
                          className="rounded-xl cursor-pointer hover:cursor-pointer"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          {isDownloading ? 'Genereren...' : 'Download'}
                        </Button>
                        <Button
                          onClick={() => setIsPreviewOpen(true)}
                          variant="outline"
                          size="sm"
                          className="rounded-xl"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Vergroot
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 px-2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <div className="transform scale-[0.6] origin-top-left w-[167%]">
                        <InvoiceTemplate
                          isKorEnabled={isKorEnabled}
                          customRule={customRule}
                          invoiceNumber={getSampleData().invoiceNumber}
                          invoicePrefix={getSampleData().invoicePrefix}
                          logoUrl={logoUrl}
                          businessInfo={getSampleData().businessInfo}
                          billingInfo={getSampleData().billingInfo}
                          orderItems={getSampleData().orderItems}
                          orderDate={getSampleData().orderDate}
                          orderId={getSampleData().orderId}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-[#111111]">Factuur Preview</h2>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  disabled={isDownloading}
                  variant="outline"
                  size="sm"
                  className="rounded-xl cursor-pointer hover:cursor-pointer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {isDownloading ? 'Genereren...' : 'Download'}
                </Button>
                <Button
                  onClick={() => setIsPreviewOpen(false)}
                  variant="outline"
                  size="sm"
                  className="rounded-xl"
                >
                  <CloseIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <InvoiceTemplate
                isKorEnabled={isKorEnabled}
                customRule={customRule}
                invoiceNumber={getSampleData().invoiceNumber}
                invoicePrefix={getSampleData().invoicePrefix}
                logoUrl={logoUrl}
                businessInfo={getSampleData().businessInfo}
                billingInfo={getSampleData().billingInfo}
                orderItems={getSampleData().orderItems}
                orderDate={getSampleData().orderDate}
                orderId={getSampleData().orderId}
              />
            </div>
          </div>
        </div>
      )}

      {/* Invoice Dialog */}
      <InvoiceDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onDownload={handleDownload}
        isDownloading={isDownloading}
      />
    </>
  )
}
