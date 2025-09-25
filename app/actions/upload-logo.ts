'use server'

import { put } from '@vercel/blob'
import { z } from 'zod'

const uploadSchema = z.object({
  file: z.instanceof(File, { message: 'File is required' }),
})

const allowedImageTypes = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml'
]

const maxFileSize = 5 * 1024 * 1024 // 5MB

export async function uploadLogo(formData: FormData) {
  try {
    const file = formData.get('file') as File
    
    if (!file) {
      return { success: false, error: 'No file provided' }
    }

    // Validate file type
    if (!allowedImageTypes.includes(file.type)) {
      return { 
        success: false, 
        error: 'Invalid file type. Please upload a JPEG, PNG, GIF, WebP, or SVG image.' 
      }
    }

    // Validate file size
    if (file.size > maxFileSize) {
      return { 
        success: false, 
        error: 'File too large. Please upload an image smaller than 5MB.' 
      }
    }

    // Generate unique filename
    const timestamp = Date.now()
    const fileExtension = file.name.split('.').pop() || 'jpg'
    const filename = `logo-${timestamp}.${fileExtension}`
    const pathname = `gratis-facturen-logos/${filename}`

    // Upload to Vercel Blob
    const blob = await put(pathname, file, {
      access: 'public',
    })

    return { 
      success: true, 
      url: blob.url,
      filename: filename 
    }
  } catch (error) {
    console.error('Logo upload error:', error)
    return { 
      success: false, 
      error: 'Failed to upload logo. Please try again.' 
    }
  }
}
