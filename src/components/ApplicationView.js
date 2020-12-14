import React from "react";
import { Route } from "react-router-dom";
import { WhiskeyProvider } from "./whiskey/WhiskeyProvider";
import { WhiskeySearchList } from "./whiskey/WhiskeySearchList";
import { WhiskeySearch } from "./whiskey/WhiskeySearch";
import { ToTryList } from "./whiskey/ToTryList";

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
                <WhiskeySearchList {...props} />
            </>
          )}

        />
        <Route
          exact
          path="/to-try"
          render={(props) => (
            <>
                <ToTryList {...props} />
            </>
          )}

        />
      </WhiskeyProvider>
    </>
  );
};
