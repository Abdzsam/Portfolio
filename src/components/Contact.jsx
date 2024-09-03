import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="pb-20">
      <h1 className="my-3 text-center text-6xl text-[#b4dbdc]">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="text-2xl">
            {CONTACT.address}
        </p>
        <a href={`mailto:${CONTACT.email}`} className="mr-2 mt-2 rounded bg-[#b4dbdc] px-2 py-1 text-xl font-semibold text-[#0077b5] hover:text-[#b4dbdc] hover:bg-[#0077b5] no-underline">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
