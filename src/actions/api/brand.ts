// api/brand.ts
import axios from 'axios'
import { Brand } from '@/core/type/brand.type'

export const fetchBrandByName = async (
  brandName: string,
): Promise<Brand | null> => {
  const apiUrl = 'https://api.jsonbin.io/v3/b/65f88e9adc74654018b4cbcb'
  const accessKey =
    '$2a$10$CmrenPJ2atGWpxfdVr2.He0wQFcCRP9NJ646abLURBO0XcP65im8a'

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Access-Key': accessKey,
      },
    })
    const data: Brand[] = response.data.record
    const brand = data.find(
      (brand: Brand) => brand.name.toLowerCase() === brandName.toLowerCase(),
    )
    return brand || null
  } catch (error) {
    console.error('Error fetching brand:', error)
    return null
  }
}
