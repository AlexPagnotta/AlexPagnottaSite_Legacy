import React from "react"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"
import { useStaticQuery, graphql } from "gatsby"
import BlogPostCard from "../components/blog-post-card";
import { Link  } from "gatsby"

const BlogPostsSectionContainer =  styled.div`
width: 100%;

//Fix scroll to with navbar
padding-top: 140px;
margin-top: -140px;

${MediaQueries.queries.tablet`

//Fix scroll to with navbar
padding-top: 100px;
margin-top: -100px;

`}
`

const BlogPostsBackContainer = styled.div`
width: 100%;
background-color: ${colors.baseColor};
`

const BlogPostsContainer = styled.div`
width: 100%;
overflow-x: hidden;
`

const TitleContainer = styled.div`
width: 100%;
padding: 60px 30px 30px 30px;
max-width: 1220px;
margin: 0 auto; //Center the container
`

const BlogPostsCardsContainer = styled.div`
width: 100%;
display flex;
overflow: auto;
padding-bottom: 60px;
max-width: 1220px;
margin: 0 auto; //Center the container

@media (min-width: 1220px) {
  margin-left: calc((100vw - 1220px) / 2); //Calculate the left margin, to make the div centered only from the left
  max-width: calc(1220px + (100vw - 1220px) / 2); //Give the div as max width 1220px plus the calculated left margin
}
`

const NoBreakLineSpan = styled.span`
white-space:nowrap;
`

function BlogPostsPage() {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "blog"}}}) {
            edges {
              node {
                id,
                frontmatter {
                  title
                  featuredImage {
                    childImageSharp {
                      fixed(height: 200) {
                        ...GatsbyImageSharpFixed
                      }
                    }     
                  }                     
                }
                internal {
                  content
                }
                fields {
                  slug
                }
              }
            }
          }
    }
  `)
  const Posts = data.allMarkdownRemark.edges
  .map(edge => <BlogPostCard key={edge.node.id} post={edge.node} />)
    return (
        <BlogPostsSectionContainer>
          <BlogPostsBackContainer>
            <BlogPostsContainer>
              <TitleContainer>
                <h1>Il Mio Blog |</h1> 
                <p>Questi sono i miei ultimi articoli dal Blog.</p> 
                <Link 
                    to={'/blog'}>   
                    <h4>Visualizza Tutto</h4>    
                  </Link>
              </TitleContainer>
              <BlogPostsCardsContainer>
                {Posts}
              </BlogPostsCardsContainer>
            </BlogPostsContainer>            
          </BlogPostsBackContainer>
        </BlogPostsSectionContainer>
    )
  }
  export default BlogPostsPage