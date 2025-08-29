import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { APIErrorResult } from '../../../../../libs/exceptions/dto/api-error-result.dto';
import { CreatePaymentInputDto } from '../api/input-dto/create-payment.input-dto';
import { AvailableSubscriptionViewDto } from '../api/view-dto/available-subscriptions.view-dto';
import { UserSubscriptionViewDto } from '../api/view-dto/user-subscription-view.dto';
import { MyPaymentsViewDto } from '../api/view-dto/my-payments.view-dto';

export function CreatePaymentSubscriptionDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create payment subscription.' }),
    ApiCreatedResponse({
      description: 'Returns payment session URL.',
      type: String,
    }),
    ApiBadRequestResponse({
      description: 'Invalid input data.',
      type: APIErrorResult,
    }),
    ApiNotFoundResponse({
      description: 'Required subscription period not found.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBody({ type: CreatePaymentInputDto }),
    ApiBearerAuth('bearer'),
  );
}

export function DisableAutoRenewalDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Disable auto-renewal for current subscription.' }),
    ApiNoContentResponse({
      description: 'Auto-renewal disabled successfully.',
    }),
    ApiNotFoundResponse({
      description: 'Subscription not found.',
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.' }),
    ApiBearerAuth('bearer'),
  );
}

export function EnableAutoRenewalDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Enable auto-renewal for current subscription.' }),
    ApiNoContentResponse({
      description: 'Auto-renewal enabled successfully.',
    }),
    ApiBadRequestResponse({
      description:
        'You cannot enable auto renewal for your current subscription if you already have a new subscription in the queue.',
      type: APIErrorResult,
    }),
    ApiNotFoundResponse({
      description: 'Subscription not found.',
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.' }),
    ApiBearerAuth('bearer'),
  );
}

export function GetAvailableSubscriptionsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get list of available subscriptions.' }),
    ApiOkResponse({
      description: 'Returns list of available subscriptions.',
      type: [AvailableSubscriptionViewDto],
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.' }),
    ApiBearerAuth('bearer'),
  );
}

export function GetCurrentPaidSubscriptionsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all current active paid subscriptions.' }),
    ApiOkResponse({
      description: 'Returns list of user active subscriptions.',
      type: [UserSubscriptionViewDto],
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.' }),
    ApiNotFoundResponse({ description: 'Subscriptions not found.' }),
    ApiBearerAuth('bearer'),
  );
}

export function GetMyPaymentsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all user payments history.' }),
    ApiOkResponse({
      description: 'Returns list of payments made by user.',
      type: [MyPaymentsViewDto],
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.' }),
    ApiNotFoundResponse({ description: 'Payments not found.' }),
    ApiBearerAuth('bearer'),
  );
}
