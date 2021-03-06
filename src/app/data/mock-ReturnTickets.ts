import { TicketReturn } from './TicketReturn';
import { ONEWAYTICKETS } from './mock-OneWayTickets';
import { TicketOneWay } from './TicketOneway';

function calculateMaxDuration (a:TicketOneWay, b:TicketOneWay) {
    return a.durationTotal > b.durationTotal ? a.durationTotal : b.durationTotal;
}

function calculateAvailableTickets (a: TicketOneWay, b: TicketOneWay) {
    return Math.min(a.availableTickets, b.availableTickets)
}

export const RETURNTICKETS: TicketReturn[] = [
    {
        ticketTo: ONEWAYTICKETS.find(({id}) => id === 1),
        ticketFrom: ONEWAYTICKETS.find(({id}) => id === 2),
        maxDuration: calculateMaxDuration(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2)),
        price: 75,
        id: 1,
        nightsIn: 4,
        availableTickets: calculateAvailableTickets(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2))
    },
    {
        ticketTo: ONEWAYTICKETS.find(({id}) => id === 1),
        ticketFrom: ONEWAYTICKETS.find(({id}) => id === 2),
        maxDuration: calculateMaxDuration(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2)),
        price: 123,
        id: 2,
        nightsIn: 4,
        availableTickets: calculateAvailableTickets(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2))

    },
    {
        ticketTo: ONEWAYTICKETS.find(({id}) => id === 1),
        ticketFrom: ONEWAYTICKETS.find(({id}) => id === 2),
        maxDuration: calculateMaxDuration(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2)),
        price: 53,
        id: 3,
        nightsIn: 4,
        availableTickets: calculateAvailableTickets(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2))

    },
    {
        ticketTo: ONEWAYTICKETS.find(({id}) => id === 1),
        ticketFrom: ONEWAYTICKETS.find(({id}) => id === 2),
        maxDuration: calculateMaxDuration(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2)),
        price: 120,
        id: 4,
        nightsIn: 4,
        availableTickets: calculateAvailableTickets(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2))

    }
]
