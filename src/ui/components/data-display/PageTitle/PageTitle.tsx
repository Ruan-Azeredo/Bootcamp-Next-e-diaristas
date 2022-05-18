import React from "react";
import { PageTitleContainer, PageTitleStyled } from "./PageTitle.style";

const PageTitle = (props) => {
    return (
        <div>
            <PageTitleContainer>
                <PageTitleStyled>
                    {props.title}
                </PageTitleStyled>
                {props.subtitle}
            </PageTitleContainer>
        </div>
    )
}

export default PageTitle;