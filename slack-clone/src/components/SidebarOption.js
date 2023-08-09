import React from 'react';
import styled from "styled-components";

function SidebarOption({Icon, title, addChannelOption}) {
    return (
        <SidebarOptionContainer>
          <div className="option-content">
            {Icon && <Icon fontSize="small" style={{padding: 10}} />}
            {Icon ? (
              <h3>{title}</h3>
            ) : (
              <SidebarOptionChannel>
                <span>#</span> {title}
              </SidebarOptionChannel>
            )}
          </div>
        </SidebarOptionContainer>
      );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    .option-content {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 5px;
    }
    
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.div``;



