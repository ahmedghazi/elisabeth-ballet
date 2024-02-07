import { redirect } from "next/navigation";

export default function Custom404() {
  redirect("/");

  return (
    <div className='py-md'>
      <h1>Error 404 - Page Not Found</h1>
    </div>
  );
}
