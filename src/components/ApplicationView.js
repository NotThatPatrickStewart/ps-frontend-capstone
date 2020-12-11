import React from "react";
import { Route } from "react-router-dom";
import { WhiskeyProvider } from "./whiskey/WhiskeyProvider";
import { WhiskeyList } from "./whiskey/WhiskeyList";
import { WhiskeySearch } from "./whiskey/WhiskeySearch";

export const ApplicationViews = (props) => {
  return (
    <>
      <WhiskeyProvider>
        <Route
          exact
          path="/search"
          render={(props) => (
            <>
                <WhiskeySearch />
                <WhiskeyList {...props} />
            </>
          )}

        />
      </WhiskeyProvider>
    </>
  );
};
