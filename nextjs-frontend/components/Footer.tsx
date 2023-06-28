import Image from "next/image";
import Link from "next/link";

import Logo from "./ui/logo";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-zinc-900 pb-7 pt-7 text-gray-200 [&>*:not(hr)]:px-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-bold">
          Top companies choose{" "}
          <span className="text-purple-300">Udemy Business</span> to build
          in-demand career skills.
        </span>

        <CompanyLogoList />
      </div>

      <hr className="my-6 border-zinc-700" />

      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between gap-20">
          <SiteLinks />

          <Logo />
        </div>

        <div className="flex flex-col justify-between">
          <Button
            variant="outline"
            className="w-[140px] justify-start gap-1 border-white text-xs hover:bg-zinc-700"
          >
            <span className="material-icons-outlined">language</span>
            <span>English</span>
          </Button>

          <span className="text-xs">© 2023 Udemy, Inc.</span>
        </div>
      </div>
    </footer>
  );
}

function CompanyLogoList() {
  return (
    <div className="flex flex-wrap gap-4">
      <Image
        width={100}
        height={100}
        src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
        alt="Nasdaq"
      />
      <Image
        width={30}
        height={100}
        src="https://s.udemycdn.com/partner-logos/volkswagen-logo.svg"
        alt="Volkswagen"
      />
      <Image
        width={50}
        height={100}
        src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
        alt="Box"
      />
      <Image
        width={80}
        height={100}
        src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
        alt="Netapp"
      />
      <Image
        width={80}
        height={100}
        src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
        alt="EventBrite"
      />
    </div>
  );
}

function SiteLinks() {
  return (
    <ul className="flex flex-col flex-wrap gap-2 lg:flex-row lg:gap-[168px] [&>div>li:hover]:underline [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:text-sm">
      <div>
        <li>
          <Link href="#">Udemy Business</Link>
        </li>

        <li>
          <Link href="/teaching">Teach on Udemy</Link>
        </li>

        <li>
          <Link href="#">Get the app</Link>
        </li>

        <li>
          <Link href="#">About us</Link>
        </li>

        <li>
          <Link href="#">Contact us</Link>
        </li>
      </div>

      <div>
        <li>
          <Link href="#">Careers</Link>
        </li>

        <li>
          <Link href="#">Blog</Link>
        </li>

        <li>
          <Link href="#">Help and Support</Link>
        </li>

        <li>
          <Link href="#">Affiliate</Link>
        </li>

        <li>
          <Link href="#">Investors</Link>
        </li>
      </div>

      <div>
        <li>
          <Link href="#">Terms</Link>
        </li>

        <li>
          <Link href="#">Privacy Policy</Link>
        </li>

        <li>
          <Link href="#">Cookie settings</Link>
        </li>

        <li>
          <Link href="#">Sitemap</Link>
        </li>

        <li>
          <Link href="#">Accessbility statement</Link>
        </li>
      </div>
    </ul>
  );
}
