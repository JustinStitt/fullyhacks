import { companyType } from '@/types/interface'
import React from 'react'

interface SponsorProps {
  companies: companyType[]
}

const Sponsors: React.FC<SponsorProps> = (props) => {
  const { companies } = props
  return (
    <div className="md:ml-[6rem]">
      <p className="mt-10 text-xl font-medium md:text-xxl">Sponsors</p>
      <p className="mt-4 font-light">
        Organizations that help make FullyHacks 2023 possible
      </p>
      <section className="flex flex-wrap items-center justify-center gap-8 my-10 ">
        {companies.map((company: companyType) => {
          return (
            <div className="mt-4 md:mt-8 md:mr-24" key={company.id}>
              <img
                src={company.image}
                alt={company.name}
                className="relative z-20 w-32 md:w-48"
              />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Sponsors
