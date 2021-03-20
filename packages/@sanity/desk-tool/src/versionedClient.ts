import type {SanityClient} from '@sanity/client'
import client from 'part:@sanity/base/client'

/**
 * Only for use inside of @sanity/desk-tool
 * Don't import this from external modules.
 *
 * @internal
 */
export const versionedClient = client.withConfig({apiVersion: '1'}) as SanityClient
