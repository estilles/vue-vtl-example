import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/vue'

import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('should render an heading with a message', () => {
    render(HelloWorld, { props: { msg: 'test' } })

    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument()
  })
})
