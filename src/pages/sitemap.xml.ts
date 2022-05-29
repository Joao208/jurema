import { GetServerSidePropsContext } from 'next'
import { getAnimals } from 'src/services/api'
import { Animal } from './animals'

function generateSiteMap(animals: Animal[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${animals
       .map(({ id }) => {
         return `
       <url>
           <loc>${`https://projetojurema.org/animal/${id}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const { data: animals } = await getAnimals()

  const sitemap = generateSiteMap(animals)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
