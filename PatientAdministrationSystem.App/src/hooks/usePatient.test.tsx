import { beforeEach, describe, expect, test, vi } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { usePatient } from "./usePatient";

const mockGetPatientListService = vi.fn();

vi.mock('../services/patientListService', () => ({
  getPatientListService: (...args: unknown[]) => mockGetPatientListService(...args),
}));

const mockReset = vi.fn();

const mockFindPatient = vi.fn();

vi.mock('./usePatientDetail', () => ({
  usePatientDetail: () => ({
    reset: mockReset,
    findPatient: mockFindPatient,
    patientDetail: null,
  }),
}));

const SAMPLE_RESPONSE_1 = {
  data: [
    { id: 'p1', firstName: 'Bruce', lastName: 'Wayne' },
    { id: 'p2', firstName: 'Clark', lastName: 'Kent' },
  ],
  message: 'ok-1',
};

const SAMPLE_RESPONSE_2 = {
  data: [{ id: 'p3', firstName: 'John', lastName: 'Stewart' }],
  message: 'ok-2',
};

describe('usePatient', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('runs initial fetch on mount and updates state', async () => {
    mockGetPatientListService.mockResolvedValueOnce(SAMPLE_RESPONSE_1);

    const { result } = renderHook(() => usePatient());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(mockReset).toHaveBeenCalledTimes(1);
    expect(mockGetPatientListService).toHaveBeenCalledWith('');
    expect(result.current.patientsList).toEqual(SAMPLE_RESPONSE_1.data);
    expect(result.current.message).toBe('ok-1');
  });

  test('searchPatients normalizes query and fetches once per distinct query', async () => {
    mockGetPatientListService
      .mockResolvedValueOnce(SAMPLE_RESPONSE_1)
      .mockResolvedValueOnce(SAMPLE_RESPONSE_2);

    const { result } = renderHook(() => usePatient());
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      await result.current.searchPatients('STEWART  ');
    });

    expect(mockGetPatientListService).toHaveBeenLastCalledWith('stewart');
    expect(mockReset).toHaveBeenCalledTimes(2);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.patientsList).toEqual(SAMPLE_RESPONSE_2.data);
      expect(result.current.message).toBe('ok-2');
    });

    await act(async () => {
      await result.current.searchPatients('stewart');
    });

    const calls = mockGetPatientListService.mock.calls.map(c => c[0]);
    expect(calls.filter(q => q === 'stewart').length).toBe(1);
  });

  test('exposes findPatient and patientDetail', async () => {
    mockGetPatientListService.mockResolvedValueOnce(SAMPLE_RESPONSE_1);

    const { result } = renderHook(() => usePatient());
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(typeof result.current.findPatient).toBe('function');
    expect(result.current.patientDetail).toBeNull();
  });
});