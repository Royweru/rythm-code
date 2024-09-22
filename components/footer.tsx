type ImageProps = {
    url?: string;
    src: string;
    alt?: string;
  };
  
  type Links = {
    title: string;
    url: string;
  };
  
  type ColumnLinks = {
    links: Links[];
  };
  
  type FooterLink = {
    title: string;
    url: string;
  };
  
  type Props = {
    logo: ImageProps;
    columnLinks: ColumnLinks[];
    footerText: string;
    footerLinks: FooterLink[];
  };
  
  export type Footer7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Footer = (props: Footer7Props) => {
    const { logo, footerText, columnLinks, footerLinks } = {
      ...Footer7Defaults,
      ...props,
    } as Props;
    return (
      <footer className="px-[5%] py-12 bg-blue-dark2 opacity-95 rounded-t-md">
        <div className="container">
          <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
            <a href={logo.url} className="mb-8">
              <img src={logo.src} alt={logo.alt} className="inline-block" />
            </a>
            {columnLinks.map((column, index) => (
              <ul
                key={index}
                className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
              >
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="font-semibold text-white">
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="h-px w-full bg-white" />
          <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
            <p className="mt-8 md:mt-0 text-neutral-white">{footerText}</p>
            <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
              {footerLinks.map((link, index) => (
                <li key={index} className="underline decoration-neutral-50 text-white underline-offset-1">
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export const Footer7Defaults: Footer7Props = {
    logo: {
      url: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
      alt: "Logo image",
    },
    columnLinks: [
      {
        links: [
          { title: "Java assignment", url: "#" },
          { title: "Javascript", url: "#" },
          { title: "HTML CSS assignment", url: "#" },
          { title: "Python assigment", url: "#" },
       
        ],
      },
    ],
    footerText: "© 2024 Rythm code. All rights reserved.",
    footerLinks: [
      { title: "Privacy Policy", url: "#" },
      { title: "Terms of Service", url: "#" },
      { title: "Cookies Settings", url: "#" },
    ],
  };
  