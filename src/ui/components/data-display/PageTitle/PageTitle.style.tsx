import {styled as styled} from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
    margin: ${({theme}) => theme.spacing(5) + ' ' + 0};
    text-align: center;
`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    color: ${({theme}) => theme.palette.primary.main};
    font-size: ${({theme}) => theme.typography.h6.fontSize };
    font-weight: 600;

    ${({theme}) => theme.breakpoints.down('md')}{                       //Responsividade: abaixo do tamanho medio 'md', o
        font-size: ${({theme}) => theme.typography.body1.fontSize};     // fonsize vai mudar de h6, que é o padrão para 
    }                                                                   // body1
`;

export const PageSubtitleStyled = styled('h3')`
    margin: ${({ theme }) => theme.spacing(1.5) + ' ' + 0};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    font-weight: normal;

    ${({theme}) => theme.breakpoints.down('md')}{                       
        font-size: ${({theme}) => theme.typography.body2.fontSize};
    } 
`