// This file is auto-generated by @hey-api/openapi-ts

import { client, type Options } from '@hey-api/client-fetch';

import type {
  BuyMuseumTicketsData,
  BuyMuseumTicketsError,
  BuyMuseumTicketsResponse2,
  CreateSpecialEventData,
  CreateSpecialEventError,
  CreateSpecialEventResponse,
  DeleteSpecialEventData,
  DeleteSpecialEventError,
  DeleteSpecialEventResponse,
  GetMuseumHoursData,
  GetMuseumHoursError,
  GetMuseumHoursResponse2,
  GetSpecialEventData,
  GetSpecialEventError,
  GetSpecialEventResponse,
  GetTicketCodeData,
  GetTicketCodeError,
  GetTicketCodeResponse2,
  ListSpecialEventsData,
  ListSpecialEventsError,
  ListSpecialEventsResponse2,
  UpdateSpecialEventData,
  UpdateSpecialEventError,
  UpdateSpecialEventResponse,
} from './types.gen';

/**
 * Get museum hours
 * Get upcoming museum operating hours.
 */
export const getMuseumHours = (options?: Options<GetMuseumHoursData>) =>
  (options?.client ?? client).get<GetMuseumHoursResponse2, GetMuseumHoursError>(
    {
      ...options,
      url: '/museum-hours',
    },
  );

/**
 * Create special events
 * Creates a new special event for the museum.
 */
export const createSpecialEvent = (options: Options<CreateSpecialEventData>) =>
  (options?.client ?? client).post<
    CreateSpecialEventResponse,
    CreateSpecialEventError
  >({
    ...options,
    url: '/special-events',
  });

/**
 * List special events
 * Return a list of upcoming special events at the museum.
 */
export const listSpecialEvents = (options?: Options<ListSpecialEventsData>) =>
  (options?.client ?? client).get<
    ListSpecialEventsResponse2,
    ListSpecialEventsError
  >({
    ...options,
    url: '/special-events',
  });

/**
 * Get special event
 * Get details about a special event.
 */
export const getSpecialEvent = (options: Options<GetSpecialEventData>) =>
  (options?.client ?? client).get<
    GetSpecialEventResponse,
    GetSpecialEventError
  >({
    ...options,
    url: '/special-events/{eventId}',
  });

/**
 * Update special event
 * Update the details of a special event.
 */
export const updateSpecialEvent = (options: Options<UpdateSpecialEventData>) =>
  (options?.client ?? client).patch<
    UpdateSpecialEventResponse,
    UpdateSpecialEventError
  >({
    ...options,
    url: '/special-events/{eventId}',
  });

/**
 * Delete special event
 * Delete a special event from the collection. Allows museum to cancel planned events.
 */
export const deleteSpecialEvent = (options: Options<DeleteSpecialEventData>) =>
  (options?.client ?? client).delete<
    DeleteSpecialEventResponse,
    DeleteSpecialEventError
  >({
    ...options,
    url: '/special-events/{eventId}',
  });

/**
 * Buy museum tickets
 * Purchase museum tickets for general entry or special events.
 */
export const buyMuseumTickets = (options: Options<BuyMuseumTicketsData>) =>
  (options?.client ?? client).post<
    BuyMuseumTicketsResponse2,
    BuyMuseumTicketsError
  >({
    ...options,
    url: '/tickets',
  });

/**
 * Get ticket QR code
 * Return an image of your ticket with scannable QR code. Used for event entry.
 */
export const getTicketCode = (options: Options<GetTicketCodeData>) =>
  (options?.client ?? client).get<GetTicketCodeResponse2, GetTicketCodeError>({
    ...options,
    url: '/tickets/{ticketId}/qr',
  });
