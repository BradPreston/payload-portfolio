import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="hero -mt-16 rounded-lg w-full">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {media && typeof media === 'object' && (
          <div className="lg:w-1/2">
            <Media
              className=""
              imgClassName="h-96 w-fit object-contain rounded"
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="mt-3">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
  // return (
  //   <div className="">
  //     <div className="container mb-8">
  //       {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

  //       {Array.isArray(links) && links.length > 0 && (
  //         <ul className="flex gap-4">
  //           {links.map(({ link }, i) => {
  //             return (
  //               <li key={i}>
  //                 <CMSLink {...link} />
  //               </li>
  //             )
  //           })}
  //         </ul>
  //       )}
  //     </div>
  //     <div className="container ">
  //       {media && typeof media === 'object' && (
  //         <div>
  //           <Media
  //             className="-mx-4 md:-mx-8 2xl:-mx-16"
  //             imgClassName=""
  //             priority
  //             resource={media}
  //           />
  //           {media?.caption && (
  //             <div className="mt-3">
  //               <RichText data={media.caption} enableGutter={false} />
  //             </div>
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )
}
