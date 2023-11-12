import {definePlugin, DialogButton, Router, ServerAPI, staticClasses,} from "decky-frontend-lib";
import {VFC} from "react";
import {FaShip} from "react-icons/fa";
import {Content} from "./Content";

// interface AddMethodArgs {
//   left: number;
//   right: number;
// }

const DeckyPluginRouterTest: VFC = () => {
    return (
        <div style={{marginTop: "50px", color: "white"}}>
            Hello World!
            <DialogButton onClick={() => Router.NavigateToLibraryTab()}>
                Go to Library
            </DialogButton>
        </div>
    );
};

export default definePlugin((serverApi: ServerAPI) => {
    serverApi.routerHook.addRoute("/decky-plugin-test", DeckyPluginRouterTest, {
        exact: true,
    });

    return {
        title: <div className={staticClasses.Title}>Example Plugin</div>,
        content: <Content serverAPI={serverApi}/>,
        icon: <FaShip/>,
        onDismount() {
            serverApi.routerHook.removeRoute("/decky-plugin-test");
        },
    };
});
