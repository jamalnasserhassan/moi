import {Suspense} from "react";

export const RouteSuspended = ({children}) => {
  return (
    <>
		<Suspense fallback=''>
			{children}
		</Suspense>
    </>
  );
};
