import { TicketReturn } from './TicketReturn';
import { ONEWAYTICKETS } from './mock-OneWayTickets';
import { TicketOneWay } from './TicketOneway';

function calculateMaxDuration (a:TicketOneWay, b:TicketOneWay) {
    return a.durationTotal > b.durationTotal ? a.durationTotal : b.durationTotal;
}

export const RETURNTICKETS: TicketReturn[] = [
    {
        ticketTo: ONEWAYTICKETS.find(({id}) => id === 1),
        ticketFrom: ONEWAYTICKETS.find(({id}) => id === 2),
        maxDuration: calculateMaxDuration(ONEWAYTICKETS.find(({id}) => id === 1), ONEWAYTICKETS.find(({id}) => id === 2)),
        price: 123,
    }
]