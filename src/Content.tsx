import {VFC} from "react";
import {
    ButtonItem,
    Menu,
    MenuItem,
    PanelSection,
    PanelSectionRow, Router,
    ServerAPI,
    showContextMenu
} from "decky-frontend-lib";

import logo from "../assets/logo.png";

export const Content: VFC<{ serverAPI: ServerAPI }> = ({serverAPI}) => {
    // const [result, setResult] = useState<number | undefined>();

    // const onClick = async () => {
    //   const result = await serverAPI.callPluginMethod<AddMethodArgs, number>(
    //     "add",
    //     {
    //       left: 2,
    //       right: 2,
    //     }
    //   );
    //   if (result.success) {
    //     setResult(result.result);
    //   }
    // };

    return (
        <PanelSection title="Panel Section">
            <PanelSectionRow>
                <ButtonItem
                    layout="below"
                    onClick={(e) =>
                        showContextMenu(
                            <Menu label="Menu" cancelText="CAAAANCEL" onCancel={() => {}}>
                                <MenuItem onSelected={() => {}}>Item #1</MenuItem>
                                <MenuItem onSelected={() => {}}>Item #2</MenuItem>
                                <MenuItem onSelected={() => {}}>Item #3</MenuItem>
                            </Menu>,
                            e.currentTarget ?? window
                        )
                    }
                >
                    Server says yolo
                </ButtonItem>
            </PanelSectionRow>

            <PanelSectionRow>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={logo} />
                </div>
            </PanelSectionRow>

            <PanelSectionRow>
                <ButtonItem
                    layout="below"
                    onClick={() => {
                        Router.CloseSideMenus();
                        Router.Navigate("/decky-plugin-test");
                    }}
                >
                    Router
                </ButtonItem>
            </PanelSectionRow>
        </PanelSection>
    );
};