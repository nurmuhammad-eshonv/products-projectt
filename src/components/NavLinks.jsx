import { Link } from "react-router-dom"


const Links = [
    {
        id: 1,
        text: "home",
        link: "/"
    },
     {
        id: 2,
        text: "about",
        link: "/About"
    },
    {
        id: 3,
        text: "contact",
        link: "/Contact"
    }
]


function NavLinks() {
  return (
    <>
      {Links.map((link) => {
         return (
         <li key={link.id}>
            <Link to={link.link}>{link.text}</Link>
         </li>
         )
      })}
    </>
  )
}

export default NavLinks