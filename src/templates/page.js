import '../polyfills';
import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layouts';
import FourOhFour from '../components/404';
import classnames from 'classnames';

// Components
import PageHeader from '../components/PageHeader';
import PageTabs from '../components/PageTabs';
import Snippet from '../components/CodeSnippet';
import PageTable from '../components/PageTable';
import ClickTile from '../components/ClickableTile';
import Example from '../components/Example';
import ColorBlock from '../components/ColorBlock';
import ColorCard from '../components/ColorCard';
import IconLibrary from '../components/IconLibrary';
import ComponentCode from '../components/ComponentCode';
import ComponentDocs from '../components/ComponentDocs';
import ComponentStatus from '../components/ComponentStatus';
import ComponentReact from '../components/ComponentReact';
import Glossary from '../components/Glossary';
import MotionExample from '../components/MotionExample';
import LayerTypes from '../components/LayerTypes';
import ComponentOverview from '../components/ComponentOverview';

// Custom Markdown
import {
  h4,
  ul,
  ol,
  PageIntro,
  PageIcon,
  FlexGroup,
} from '../components/markdown/Markdown';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h4: h4,
    ul: ul,
    ol: ol,
    pre: Snippet,
    table: PageTable,
    'page-intro': PageIntro,
    icon: PageIcon,
    'flex-group': FlexGroup,
    'clickable-tile': ClickTile,
    example: Example,
    'color-block': ColorBlock,
    'color-card': ColorCard,
    'icon-library': IconLibrary,
    component: ComponentCode,
    'component-react': ComponentReact,
    'component-docs': ComponentDocs,
    'component-status': ComponentStatus,
    glossary: Glossary,
    'motion-example': MotionExample,
    'layer-types': LayerTypes,
    'component-overview': ComponentOverview,
  },
}).Compiler;

export default ({ data, pageContent }) => {
  const post = data.markdownRemark;
  let currentPage = post.fields.currentPage;
  let slug = post.fields.slug;
  let tabs = post.frontmatter.tabs;

  const classNames = classnames('page-content', {
    'page-content--component': post.frontmatter.label === 'Component',
  });

  return (
    <Layout>
      <PageHeader
        title={post.frontmatter.title}
        label={post.frontmatter.label}
      />
      {!(tabs === null) && (
        <PageTabs slug={slug} currentTab={currentPage} tabs={tabs} />
      )}
      <div className={classNames}> {renderAst(post.htmlAst)}</div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
        currentPage
      }
      frontmatter {
        title
        label
        tabs
      }
    }
  }
`;
