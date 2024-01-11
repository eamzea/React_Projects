import { Shopping } from 'modules/CompPatterns/pages';
import Home from 'pages/home';
import { lazy, LazyExoticComponent } from 'react';

const LazyLayout = lazy(() => import(/* webpackChunkName: "Lazy_Page_1" */ 'modules/Lazy/components/Layout'))


type JSXComponent = () => JSX.Element;

interface RouteType {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: RouteType[] = [
  {
    to: '/',
    path: '/',
    Component: Home,
    name: 'home',
  },
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'lazy',
  },
  {
    to: '/02-component-patterns',
    path: '02-component-patterns',
    Component: Shopping,
    name: 'ComponentPatterns',
  },
];