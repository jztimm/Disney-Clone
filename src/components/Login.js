import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Content>
        Content
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh
`

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;    // Makes it go to the right 'center'
  align-items: center;        // Makes items go to the bottom 'center'
  flex-direction: column;
`

export default Login
