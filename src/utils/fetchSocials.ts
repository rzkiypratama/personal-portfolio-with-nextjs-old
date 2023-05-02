import { Social } from "../../typing"

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);

  const data = await res.json();
  const social: Social[] = data.socials;

  return social;
}