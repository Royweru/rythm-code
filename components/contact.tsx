import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

type LinkProps = {
  label: string;
  url: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact= (props: Contact24Props) => {
  const { tagline, heading, description, contacts } = {
    ...Contact24Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-8 max-w-lg md:mb-12 lg:mb-18">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-shade-yellow">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="rb-5 mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-normal text-blue-dark2 md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a className="underline" href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact24Defaults: Contact24Props = {
  tagline: "Tagline",
  heading: "Contact us",
 
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Reach through our email",
      link: {
        label: "hello@relume.io",
        url: "#",
      },
    },
    {
      icon: <BiMessageDetail className="size-12" />,
      title: "Live chat",
      description:
        "Chat with us on the green app",
      link: {
        label: "Start new chat",
        url: "#",
      },
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      description:
        "Make a cold call",
      link: {
        label: "+254 759 355 344",
        url: "#",
      },
    },
  
  ],
};
