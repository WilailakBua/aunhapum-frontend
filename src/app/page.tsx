// import { sql } from "@vercel/postgres";

// export default async function Cart({
//   params
// } : {
//   params: { user: string }
// }): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }

import { sql } from "@vercel/postgres";

// const likes = 100;
// const { rows } = await sql`SELECT * FROM menulist`;
 
//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.name}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }