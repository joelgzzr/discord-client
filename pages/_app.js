import App from 'next/app';
import wrapper from '../redux/store';
import { ThemeProvider } from 'styled-components';
import Page from '../components/layout/Page';

const theme = {
    primaryColor: 'rgb(30,30,30)',
    secondaryColor: 'white'
}

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {
            ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}),
        };

        let pathName = ctx.pathname;
        return { pageProps, pathName };
    }

    renderComponent = () => {
        const { Component, pageProps, pathName } = this.props;

        if(pathName === '/') {
            return (
                <Component {...pageProps} />
            )
        }

        return (
            <Page>
                <Component {...pageProps} />
            </Page>
        )
    }

    render() {
        const { store } = this.props;

        return (
            <ThemeProvider theme={theme}>
                { this.renderComponent() }
            </ThemeProvider>
        )
    }
}

export default wrapper.withRedux(MyApp);