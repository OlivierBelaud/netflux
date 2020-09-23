import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  const wrapper = mount(Header)
  const name = wrapper.findComponent({ ref: 'testHeaderName' })
  const number = wrapper.findComponent({ ref: 'testHeaderMovieNumber' })
  const wishlist = wrapper.findComponent({ ref: 'testHeaderWishlistLink' })

  it('should create a Vue Instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should display testHeaderName div', () => {
    expect(name.exists()).toBe(true)
  })
  it('should display the "Netflux" in testHeaderName', () => {
    expect(name.text()).toBe('Netflux')
  })
  it('should display the Home link in testHeaderName', () => {
    expect(name.html()).toContain('to="/"')
  })
  it('should display testHeaderMovieNumber div', () => {
    expect(number.exists()).toBe(true)
  })
  it('should display testHeaderWishlistLink div', () => {
    expect(wishlist.exists()).toBe(true)
  })
  it('should display "wishlist" in testHeaderWishlistLink', () => {
    expect(wishlist.text()).toBe('Wishlist')
  })
  it('shpuld display the Wishlist Link in testHeaderWishlistLink', () => {
    expect(wishlist.html()).toContain('to="/wishlist"')
  })
})
