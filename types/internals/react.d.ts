import * as React from "react"
import { Session } from ".."

export interface BroadcastMessage {
  event?: "session"
  data?: {
    trigger?: "signout" | "getSession"
  }
  clientId: string
  timestamp: number
}

export interface NextAuthConfig {
  baseUrl: string
  basePath: string
  baseUrlServer: string
  basePathServer: string
  /** Stores last session response */
  _session?: Session | null
  /** Used for timestamp since last sycned (in seconds) */
  _lastSync: number
  /**
   * Stores the `SessionProvider`'s session update method to be able to
   * trigger session updates from places like `signIn` or `signOut`
   */
  _getSession: any
}

export type SessionContextValue<R extends boolean = false> = R extends true
  ?
      | { data: Session; status: "authenticated"; loading: false }
      | { data: null; status: "loading"; loading: true }
  :
      | { data: Session; status: "authenticated"; loading: false }
      | { data: null; status: "unauthenticated" | "loading"; loading: boolean }

export type SessionContext = React.Context<SessionContextValue>
