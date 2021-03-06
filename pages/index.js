import { useAmp } from 'next/amp';
import Home from '../components/Home/home'
import Page from '../components/page';
import Footer from '../components/footer';
import ListProperty from '../components/listProperty';
import fetch from 'node-fetch'
import { fetcher } from '../shared/globalFunc';
import Link from 'next/link';
import SocialMeta from '../components/social-meta';
import { SkipNavContent } from '@reach/skip-nav';

export default (props) => {
  const isAmp = useAmp();

  return (
    <Home/>
  );
};

