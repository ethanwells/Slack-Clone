import React from 'react';
import styled from "styled-components";
import { FiberManualRecord } from '@mui/icons-material';
import { Create } from '@material-ui/icons';
import SidebarOption from './SidebarOption';
import InsertComment from '@mui/icons-material/InsertComment';
import Inbox from '@mui/icons-material/Inbox';
import Drafts from '@mui/icons-material/Drafts';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Apps from '@mui/icons-material/Apps';
import FileCopy from '@mui/icons-material/FileCopy';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Add from '@mui/icons-material/Add';


function Sidebar() {
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Slack Clone</h2>
                <h3>
                    <FiberManualRecord />
                    Ethan Wells
                </h3>
            </SidebarInfo> 
            <Create />
        </SidebarHeader>

        <SidebarOption Icon={InsertComment} title="Threads" />
        <SidebarOption Icon={Inbox} title="Mentions & reactions" />
        <SidebarOption Icon={Drafts} title="Saved items" />
        <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
        <SidebarOption Icon={PeopleAlt} title="People & user groups" />
        <SidebarOption Icon={Apps} title="Apps" />
        <SidebarOption Icon={FileCopy} title="File browser" />
        <SidebarOption Icon={ExpandLess} title="Show less" />
        <hr />
        <SidebarOption Icon={ExpandMore} title="Channels" />
        <hr />
        <SidebarOption Icon={Add} addChannelOption title="Add Channel" />


    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }

`;