import styled, { css } from 'styled-components'

// import List from '@/components/List'
// import Table from '@/components/Table'

interface Props {

}

const borderedStyles = css`
  border-bottom: 1px solid ${p => p.theme.grey200};
`

const Card = styled.div`
  width: 100%;

  background-color: white;
  border: 1px solid ${p => p.theme.grey400};
  border-radius: 0.375rem;
`

export const Body = styled.div`
  padding: 1.5rem;

  position: relative;

  background-color: ${p => p.theme[p.bgColor]};

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  & + &,
  ${List} + & {
    border-top: 1px solid ${p => p.theme.grey200};
  }

  ${Table} + & {
    border-top: 1px solid ${p => p.theme.grey100};
  }
`

Body.defaultProps = {
  bgColor: 'white'
}

export const Header = styled.div`
  align-items: ${p => p.align};
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;

  background-color: white;

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  ${Body} + & {
    border-top: 1px solid ${p => p.theme.grey200};
  }

  & + ${Body} {
    padding-top: 0.25rem;
  }

  ${p => p.bordered && borderedStyles};
`

Header.defaultProps = {
  align: 'center',
  bordered: false
}

export default Card
