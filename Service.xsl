<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    body {
                    font-size: 25px;
                    }
                    table {
                    border: 1px solid black;
                    }
                    td {
                    border: 1px solid black;
                    }

                </style>
            </head>
            <body>
                <div>
                    <table>
                        <thead>
                            <th>name</th>
                            <th>status</th>
                            <th>hours</th>
                            <th>feedback</th>
                        </thead>
                        <tbody>
                            <xsl:apply-templates select="//Service"></xsl:apply-templates>
                        </tbody>
                    </table>
                </div>

            </body>
        </html>
    </xsl:template>
    <xsl:template match="Service">
        <tr>
            <td><xsl:value-of select="//client/@name"></xsl:value-of></td>
            <td><xsl:value-of select="//orders/@status"></xsl:value-of></td>

            <td><xsl:value-of select="//time/@hours"></xsl:value-of></td>

            <td><xsl:value-of select="//feedback/@rewiew"></xsl:value-of></td>
            <td>
                <xsl:text><xsl:value-of select="generate-id()"/></xsl:text>
            </td>
        </tr>

    </xsl:template>
</xsl:stylesheet>